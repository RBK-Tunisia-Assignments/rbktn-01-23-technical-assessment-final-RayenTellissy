-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema recepies
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema recepies
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `recepies` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema recepies
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema recepies
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `recepies` DEFAULT CHARACTER SET utf8mb3 ;
USE `recepies` ;

-- -----------------------------------------------------
-- Table `recepies`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recepies`.`users` (
  `user_Id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_Id`),
  UNIQUE INDEX `user_Id_UNIQUE` (`user_Id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `recepies`.`recepie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recepies`.`recepie` (
  `recepie_Id` INT NOT NULL AUTO_INCREMENT,
  `Cook_Time` INT NULL DEFAULT NULL,
  `Prep_Time` INT NULL DEFAULT NULL,
  `recepie_Name` VARCHAR(255) NULL DEFAULT NULL,
  `Serves` INT NULL DEFAULT NULL,
  `categorie` VARCHAR(255) NULL DEFAULT NULL,
  `recepie_Image` VARCHAR(255) NULL DEFAULT NULL,
  `recepie_Description` VARCHAR(255) NULL DEFAULT NULL,
  `recepie_Ingredients` VARCHAR(255) NULL DEFAULT NULL,
  `users_user_Id` INT NOT NULL,
  PRIMARY KEY (`recepie_Id`),
  UNIQUE INDEX `idrecepie_UNIQUE` (`recepie_Id` ASC) VISIBLE,
  INDEX `fk_recepie_users_idx` (`users_user_Id` ASC) VISIBLE,
  CONSTRAINT `fk_recepie_users`
    FOREIGN KEY (`users_user_Id`)
    REFERENCES `recepies`.`users` (`user_Id`))
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `recepies`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recepies`.`favorites` (
  `user_id` INT NOT NULL,
  `recepie_id` INT NOT NULL,
  INDEX `fk_favorites_users_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_favorites_recepie1_idx` (`recepie_id` ASC) VISIBLE,
  CONSTRAINT `fk_favorites_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `recepies`.`users` (`user_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_favorites_recepie1`
    FOREIGN KEY (`recepie_id`)
    REFERENCES `recepies`.`recepie` (`recepie_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `recepies` ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
