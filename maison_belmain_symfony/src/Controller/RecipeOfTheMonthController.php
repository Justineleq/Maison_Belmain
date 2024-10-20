<?php

namespace App\Controller;

use App\Entity\RecipeOfTheMonth;
use App\Form\RecipeOfTheMonthType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/recipeofthemonth', name: 'app_recipe_of_the_month_')]
class RecipeOfTheMonthController extends AbstractController
{
    #[IsGranted('ROLE_USER')]
    #[Route('s', name: 'index', methods: ['GET', 'POST'])]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        if ($request->isMethod('POST')) {
            $selectedRecipeId = $request->request->get('selected');

            // Clear all selections
            $recipes = $entityManager->getRepository(RecipeOfTheMonth::class)->findAll();
            foreach ($recipes as $recipe) {
                $recipe->setSelected(false);
                $entityManager->persist($recipe);
            }

            // Set the selected recipe
            if ($selectedRecipeId) {
                $selectedRecipe = $entityManager->getRepository(RecipeOfTheMonth::class)->find($selectedRecipeId);
                if ($selectedRecipe) {
                    $selectedRecipe->setSelected(true);
                    $entityManager->persist($selectedRecipe);
                }
            }

            $entityManager->flush();
        }

        return $this->render('recipe_of_the_month/index.html.twig', [
            'recipe_of_the_months' => $entityManager->getRepository(RecipeOfTheMonth::class)->findAll(),
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $recipeOfTheMonth = new RecipeOfTheMonth();
        $form = $this->createForm(RecipeOfTheMonthType::class, $recipeOfTheMonth);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($recipeOfTheMonth);
            $entityManager->flush();

            return $this->redirectToRoute('app_recipe_of_the_month_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('recipe_of_the_month/new.html.twig', [
            'recipe_of_the_month' => $recipeOfTheMonth,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(RecipeOfTheMonth $recipeOfTheMonth): Response
    {
        return $this->render('recipe_of_the_month/show.html.twig', [
            'recipe_of_the_month' => $recipeOfTheMonth,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, RecipeOfTheMonth $recipeOfTheMonth, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(RecipeOfTheMonthType::class, $recipeOfTheMonth);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_recipe_of_the_month_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('recipe_of_the_month/edit.html.twig', [
            'recipe_of_the_month' => $recipeOfTheMonth,
            'form' => $form,
        ]);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, RecipeOfTheMonth $recipeOfTheMonth, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$recipeOfTheMonth->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($recipeOfTheMonth);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_recipe_of_the_month_index', [], Response::HTTP_SEE_OTHER);
    }

}
