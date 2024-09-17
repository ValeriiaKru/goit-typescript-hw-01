type AllType = {
  name: string;
  position: number;
  color: string;
    weight: number;
}

type UserBasicInfo = {
    top: Pick<AllType, 'name' | 'color'>;
    bottom: Pick<AllType, 'position' | 'weight'>;
}

function compare (top:UserBasicInfo['top'], bottom:UserBasicInfo['bottom']): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}