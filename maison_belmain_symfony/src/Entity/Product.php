<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[Groups('api_product_index')]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    
    #[Groups('api_product_index')]
    #[ORM\Column(length: 255)]
    private ?string $image = null;

    #[Groups('api_product_index')]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    /**
     * @var Collection<int, Order>
     */
    #[ORM\ManyToMany(targetEntity: Order::class, mappedBy: 'Product')]
    private Collection $orders;

    #[Groups('api_product_index')]
    #[ORM\ManyToOne(inversedBy: 'Product')]
    private ?Flavour $flavour = null;

    #[Groups('api_product_index')]
    #[ORM\ManyToOne(inversedBy: 'Product')]
    private ?Quantity $quantity = null;

    #[Groups('api_product_index')]
    #[ORM\ManyToOne]
    private ?ProductPrice $price = null;

    #[Groups('api_product_index')]
    #[ORM\Column(type: Types::DECIMAL, scale: 4)]
    private ?float $finalPrice = null;

    #[Groups('api_product_index')]
    #[ORM\ManyToOne(inversedBy: 'Product')]
    private ?Category $category = null;

    public function __construct()
    {
        $this->orders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, Order>
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(Order $order): static
    {
        if (!$this->orders->contains($order)) {
            $this->orders->add($order);
            $order->addProduct($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): static
    {
        if ($this->orders->removeElement($order)) {
            $order->removeProduct($this);
        }

        return $this;
    }

    public function getFlavour(): ?Flavour
    {
        return $this->flavour;
    }

    public function setFlavour(?Flavour $flavour): static
    {
        $this->flavour = $flavour;

        return $this;
    }

    public function getQuantity(): ?Quantity
    {
        return $this->quantity;
    }

    public function setQuantity(?Quantity $quantity): static
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getPrice(): ?ProductPrice
    {
        return $this->price;
    }

    public function setPrice(?ProductPrice $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getFinalPrice(): ?float
    {
        return $this->finalPrice;
    }

    public function setFinalPrice(float $finalPrice): static
    {
        $this->finalPrice = $finalPrice;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }
}
