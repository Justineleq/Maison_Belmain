<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('api/order', name: 'create')]
class OrderController extends AbstractController
{
    #[Route('/create', name: 'create')]
    public function index(Request $request): Response
    {
        $content = $request->getContent();

        $data = json_decode($content, true);

        dd($data);

        return new Response('Request content processed');
    }
}
