<?php

namespace App\Controller;

use App\Entity\Product;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use App\Service\PricingService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/product', name: 'app_product_')]
class ProductController extends AbstractController
{

    private $entityManager;
    private $pricingService;


    #[Route('s', name: 'index', methods: ['GET'])]
    public function index(ProductRepository $productRepository): Response
    {
        return $this->render('product/index.html.twig', [
            'products' => $productRepository->findAll(),
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, PricingService $pricingService): Response
    {
        $this->entityManager = $entityManager;
        $this->pricingService = $pricingService;

        $product = new Product();
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $quantity = $product->getQuantity();
            $basePrice = $product->getPrice();

            // Calculate the final price
            $finalPrice = $this->pricingService->calculatePrice($quantity, $basePrice);

            $product->setFinalPrice(number_format($finalPrice, 2));

            $entityManager->persist($product);
            $entityManager->flush();

            return $this->redirectToRoute('app_product_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('product/new.html.twig', [
            'product' => $product,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Product $product): Response
    {
        return $this->render('product/show.html.twig', [
            'product' => $product,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Product $product, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_product_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('product/edit.html.twig', [
            'product' => $product,
            'form' => $form,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Product $product, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$product->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($product);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_product_index', [], Response::HTTP_SEE_OTHER);
    }

    public function __construct(EntityManagerInterface $entityManager, PricingService $pricingService)
    {
        $this->entityManager = $entityManager;
        $this->pricingService = $pricingService;
    }
     /**
     * @Route("/order/create", name="create_order")
     */
       /**
     * @Route("/product/update", name="update_product")
     */
    public function updateProduct(Request $request): Response
    {
        // Fetch product (this can be from the request or your business logic)
        $product = $this->entityManager->getRepository(Product::class)->find($request->get('product_id'));
        $quantity = $product->getQuantity();
        $basePrice = $product->getPrice();

        // Calculate the final price
        $finalPrice = $this->pricingService->calculatePrice($quantity, $basePrice);

        // Update the product with the final price
        $product->setFinalPrice($finalPrice);
        $this->entityManager->flush();

        return new Response('Product updated with final price: ' . $finalPrice);
    }
}
