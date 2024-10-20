<?php

namespace App\Controller\Api;

use App\Entity\Order;
use App\Entity\OrderStatus;
use App\Entity\Product;
use App\Entity\ProductPrice;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/order', name: 'api_app_order_')]
class OrderController extends AbstractController
{
    #[Route('/create', name: 'create', methods: ['POST'])]
    public function index(Request $request, EntityManagerInterface $em): Response
    {
        $content = $request->getContent();
        $data = json_decode($content, true);

        $cartData = $data['cart'] ?? null;
        if ($cartData === null || !is_array($cartData)) {
            return new JsonResponse(['error' => 'Invalid cart data'], Response::HTTP_BAD_REQUEST);
        }

        $order = new Order();
        $totalPrice = 0;

        foreach ($cartData as $item) {
            $productId = $item['id'] ?? null;

            if ($productId === null) {
                return new JsonResponse(['error' => 'Product ID is missing'], Response::HTTP_BAD_REQUEST);
            }

            $product = $em->getRepository(Product::class)->find($productId);
            if (!$product) {
                return new JsonResponse(['error' => 'Product not found'], Response::HTTP_NOT_FOUND);
            }

            $order->addProduct($product);

            $productPrice = $product->getPrice();
            if ($productPrice instanceof ProductPrice) {
                $totalPrice += $productPrice->getAmount(); 
            } else {
                $totalPrice += $productPrice; 
            }
        }

        $order->setTotalPrice($totalPrice);
        
        $defaultOrderStatus = 1; 

        $currentOrderStatus = $em->getRepository(OrderStatus::class)->find($defaultOrderStatus);
        $order->setOrderStatus($currentOrderStatus);

        $em->persist($order);
        $em->flush();

        return new JsonResponse(['message' => 'Order created', 'order_id' => $order->getId()], Response::HTTP_CREATED);
    }
}
