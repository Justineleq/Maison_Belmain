<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240625143451 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE recipe_of_the_month ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE recipe_of_the_month ADD CONSTRAINT FK_59E5F40BA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('CREATE INDEX IDX_59E5F40BA76ED395 ON recipe_of_the_month (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE recipe_of_the_month DROP FOREIGN KEY FK_59E5F40BA76ED395');
        $this->addSql('DROP INDEX IDX_59E5F40BA76ED395 ON recipe_of_the_month');
        $this->addSql('ALTER TABLE recipe_of_the_month DROP user_id');
    }
}
