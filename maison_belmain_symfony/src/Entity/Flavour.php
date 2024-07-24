<?php

namespace App\Entity;

use App\Repository\FlavourRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: FlavourRepository::class)]
class Flavour
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups('api_product_index')]
    #[ORM\Column(length: 255)]
    private ?string $name = null;


    /**
     * @var Collection<int, Product>
     */
    #[ORM\OneToMany(targetEntity: Product::class, mappedBy: 'flavour')]
    private Collection $Product;

    public function __construct()
    {
        $this->Product = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    
    public function __toString() {
        return $this->name;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getProduct(): Collection
    {
        return $this->Product;
    }

    public function addProduct(Product $product): static
    {
        if (!$this->Product->contains($product)) {
            $this->Product->add($product);
            $product->setFlavour($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): static
    {
        if ($this->Product->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getFlavour() === $this) {
                $product->setFlavour(null);
            }
        }

        return $this;
    }
}
