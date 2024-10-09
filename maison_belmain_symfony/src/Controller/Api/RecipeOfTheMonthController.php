<?php

namespace App\Controller\Api;

use App\Repository\RecipeOfTheMonthRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;


class RecipeOfTheMonthController extends AbstractController
{
    #[Route('/api/recipeofthemonth', name: 'app_api_recipe_of_the_month_index')]
    public function index(RecipeOfTheMonthRepository $rotmRepo): Response
    {
        //findBy function to find isselected????
        $rotm = $rotmRepo->findAll();

        return $this->json(data: $rotm, context: ['groups' => 'api_rotm_index']);

        var_dump($rotm);
    }


}
