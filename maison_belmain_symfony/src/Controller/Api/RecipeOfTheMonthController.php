<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/recipeofthemonth', name: 'app_api_recipe_of_the_month_')]
class RecipeOfTheMonthController extends AbstractController
{
    #[Route('s', name: 'index')]
    public function index(): Response
    {
        return $this->render('api/recipe_of_the_month/index.html.twig', [
            'controller_name' => 'RecipeOfTheMonthController',
        ]);
    }
}
