<?php

namespace App\Service;

use App\Entity\Quantity;
use App\Entity\ProductPrice;

class PricingService
{
    public function calculatePrice(Quantity $quantity, ProductPrice $basePrice): float
    {
        $quantityValue = $quantity->getAmount();
        $baseAmount = $basePrice->getAmount();

        // Example pricing logic based on quantity
        switch ($quantityValue) {
            case 6:
                return 6 * 0.95;
            case 12:
                return 12 * 0.90;
            case 24:
                return 24 * 0.80;
            default:
                return $baseAmount; // Default pricing if no specific rule
        }
    }
}
