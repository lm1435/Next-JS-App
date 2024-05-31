import { CarCardProps } from "@/types/CarCardProps";

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    year,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
  } = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p>
        <span>Car Rent....</span>
      </p>
    </div>
  );
};

export default CarCard;
