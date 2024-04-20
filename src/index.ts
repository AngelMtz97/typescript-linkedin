type Color = 'negro' | 'rojo' | 'azul' | 'amarillo';

class Vehiculo {
    _marca: string;
    _color: Color;

    constructor(marca: string, color: Color) {
        this._marca = marca;
        this._color = color;
    }

    descripcionVehiculo(): string {
        return `El vehículo es de marca ${this._marca} y es de color ${this._color}`;
    }

    moverse(): string {
        return `El vehículo se mueve a una velocida de ${this.obtenerVelocidad()}`;
    }

    private obtenerVelocidad(): string {
        return '100 km/h';
    }
}

const miVehiculo = new Vehiculo('Nissan', 'negro');
console.log(miVehiculo.descripcionVehiculo());