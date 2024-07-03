<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240703121038 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product ADD price_id INT DEFAULT NULL, DROP product_price_id');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04ADD614C7E7 FOREIGN KEY (price_id) REFERENCES product_price (id)');
        $this->addSql('CREATE INDEX IDX_D34A04ADD614C7E7 ON product (price_id)');
        $this->addSql('ALTER TABLE product_price CHANGE amount amount INT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product_price CHANGE amount amount NUMERIC(10, 2) NOT NULL');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04ADD614C7E7');
        $this->addSql('DROP INDEX IDX_D34A04ADD614C7E7 ON product');
        $this->addSql('ALTER TABLE product ADD product_price_id INT NOT NULL, DROP price_id');
    }
}
