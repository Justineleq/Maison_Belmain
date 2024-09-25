<?php

namespace App\Controller\Api;

use App\Entity\Contact;
use App\Repository\ContactRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/contact', name: 'app_api_contact_')]
class ContactController extends AbstractController
{
    #[Route('s', name: 'index')]
    public function index(ContactRepository $contactRepository): Response
    {
        $contacts = $contactRepository->findAll();

        return $this->json(data: $contacts);
        
    }

    #[Route('/new', name: 'new')]
    public function new(
        Request $request,
        EntityManagerInterface $em,
        SerializerInterface $serializer,
        ValidatorInterface $validator,
        ContactRepository $contactRepository,
        ): Response
{
        $contact = $serializer->deserialize($request->getContent(), Contact::class, 'json');

        $errors = $validator->validate($contact);

        if ($errors->count() > 0) 
        {
            $messages = [];
            foreach ($errors as $error) 
            {
                $messages[] = $error->getMessage();
            }

            return $this->json(['errors' => $messages], Response::HTTP_UNPROCESSABLE_ENTITY);
        } else
        {

            $em->persist($contact);
            $em->flush();

            return $this->json(null, Response::HTTP_CREATED);


        }
    }
}
