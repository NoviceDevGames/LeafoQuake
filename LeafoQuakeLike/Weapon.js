export class Weapon{/*Base class for weapons in the game */
    /** WeaponTypes is a global variable for all the Weapon instances which list all the types of weapons in the game  */
    static weaponTypes = Object.freeze({HITSCAN : "HITSCAN", AREA_TYPE:"AREA_TYPE", BULLET_TYPE:"BULLET_TYPE"});
    constructor(name,weaponType,maxAmmo,damage,weight,){
        this.name = name;
        this.weaponType = weaponType;
        this.maxAmmo = maxAmmo;
        this.damage = damage;
        this.weight = weight;
    }
/*functions that return the weapon properties  */
    get_name(){
        return this.name;
    }
    get_weaponType(){
        return this.weaponType;
    }
    get_maxAmmo(){
        return this.maxAmmo;
    }
    get_damage(){
        return this.damage;
    }
    get_weight(){
        return this.weight;
    }


    /* give the necessary informations to the player to shoot */
    shoot(shooter){

        switch (this.get_weaponType()){
            case this.weaponTypes.HITSCAN :
                shooter.shoot_laser?.(this);
                break;
            case this.weaponTypes.AREA_TYPE:
                shooter.shoot_area?.(this);
                break;
            case this.weaponTypes.BULLET_TYPE:
                shooter.shoot_bullet?.(this);
                break;
        }
    }
}