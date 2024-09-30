<?php

namespace App\Controller\Api;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/product', name: 'app_api_product_')]
class ProductController extends AbstractController
{
    #[Route('s', name: 'index')]
    public function index(ProductRepository $productRepo): Response
    {
        $products = $productRepo->findAll();

        return $this->json(data: $products, context: ['groups' => 'api_product_index']);

        // var_dump($products);
    }
    
}
