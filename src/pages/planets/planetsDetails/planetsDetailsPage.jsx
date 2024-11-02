import { useParams } from "react-router-dom";
import { usePlanetsDetails } from "../../../hooks/usePlanetsDetails";
import { CardPlanetsDetails } from "../../../components/custom/cardPlanets/cardPlanetsDetails/CardPlanetsDetails";

export const PlanetsDetailsPage = () => {
    const { id } = useParams();
    const { data, loading, error } = usePlanetsDetails(id);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <>
            {data && (
                <CardPlanetsDetails
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    description={data.description}
                    image={data.image}
                    characters={data.characters}
                />
            )}

        </>
    );
};


