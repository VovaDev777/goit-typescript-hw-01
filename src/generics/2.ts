type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  }
  
  function compare<T extends keyof AllType, U extends keyof AllType>(
    top: Pick<AllType, T>,
    bottom: Pick<AllType, U>
  ): AllType {
    return {
      name: top.name as AllType['name'],     
      color: top.color as AllType['color'],     
      position: bottom.position as AllType['position'], 
      weight: bottom.weight as AllType['weight'], 
    };
  }
  