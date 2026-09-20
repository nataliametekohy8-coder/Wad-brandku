import { useEffect, useState } from "react";
import { getData } from "../api/getdata";
import Card from "./Card";


function CardGrid() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setProducts(data);
        }

        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {products.map((product) => (
            <Card
                key={product.id}
                image={product.image}
                title={product.title}
                subtitle={`$${product.price}`}
            />
            ))}
        </div>
    );
};

export default CardGrid;