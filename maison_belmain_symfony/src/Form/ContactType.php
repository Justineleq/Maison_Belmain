<?php

namespace App\Form;

use App\Entity\Contact;
use App\Entity\ContactStatus;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('name', null, [
            'attr' => ['class' => 'form-control'],
            'label_attr' => ['class' => 'form-label'],
        ])
        ->add('email', null, [
            'attr' => ['class' => 'form-control'],
            'label_attr' => ['class' => 'form-label'],
        ])
        ->add('subject', null, [
            'attr' => ['class' => 'form-control'],
            'label_attr' => ['class' => 'form-label'],
        ])
        ->add('message', null, [
            'attr' => ['class' => 'form-control'],
            'label_attr' => ['class' => 'form-label'],
        ]);
        
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}
