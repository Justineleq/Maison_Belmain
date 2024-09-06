<?php

namespace App\Controller;

use App\Repository\OrderRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;


class HomeController extends AbstractController
{
    #[Route('/home', name: 'index')]
    public function index(OrderRepository $orderRepository): Response
    {
        $orders = $orderRepository->findPendingOrders();

        return $this->render('home/index.html.twig', [
            'orders' => $orders,
        ]);
    }
    
}

