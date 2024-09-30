<?php

namespace App\Repository;

use App\Entity\Order;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Order>
 */
class OrderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Order::class);
        
    }
/**
     * @return Order[] Returns an array of Order objects
     */
       public function findPendingOrders(): array
       {
           return $this->createQueryBuilder('o')
           ->innerJoin('o.orderStatus', 's')
           ->where('s.title = :status')
           ->setParameter('status', 'Pending')
           ->getQuery()
           ->getResult();
           ;
       }

           //    public function findOneBySomeField($value): ?Order
    //    {
    //        return $this->createQueryBuilder('o')
    //            ->andWhere('o.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

}
