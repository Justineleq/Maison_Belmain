<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\Product;
use App\Form\OrderType;
use App\Repository\OrderRepository;
use App\Service\PricingService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/order', name: 'app_order_')]
class OrderController extends AbstractController
{
    private $entityManager;
    private $pricingService;

    #[IsGranted('ROLE_ADMIN')]
    #[Route('s', name: 'index', methods: ['GET'])]
    public function index(OrderRepository $orderRepository): Response
    {
        return $this->render('order/index.html.twig', [
            'orders' => $orderRepository->findAll(),
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $order = new Order();
        $form = $this->createForm(OrderType::class, $order);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($order);
            $entityManager->flush();

            return $this->redirectToRoute('app_order_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('order/new.html.twig', [
            'order' => $order,
            'form' => $form,
        ]);
    }
    
    #[IsGranted('ROLE_ADMIN')]
    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Order $order): Response
    {
        return $this->render('order/show.html.twig', [
            'order' => $order,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Order $order, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(OrderType::class, $order);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_order_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('order/edit.html.twig', [
            'order' => $order,
            'form' => $form,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Order $order, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$order->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($order);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_order_index', [], Response::HTTP_SEE_OTHER);
    }
    // public function __construct(EntityManagerInterface $entityManager, PricingService $pricingService)
    // {
    //     $this->entityManager = $entityManager;
    //     $this->pricingService = $pricingService;
    // }
    //  /**
    //  * @Route("/order/create", name="create_order")
    //  */
    //    /**
    //  * @Route("/product/update", name="update_product")
    //  */
    // public function updateProduct(Request $request): Response
    // {
    //     // Fetch product (this can be from the request or your business logic)
    //     $product = $this->entityManager->getRepository(Product::class)->find($request->get('product_id'));
    //     $quantity = $product->getQuantity();
    //     $basePrice = $product->getPrice();

    //     // Calculate the final price
    //     $finalPrice = $this->pricingService->calculatePrice($quantity, $basePrice);

    //     // Update the product with the final price
    //     $product->setFinalPrice($finalPrice);
    //     $this->entityManager->flush();

    //     return new Response('Product updated with final price: ' . $finalPrice);
    // }


}
