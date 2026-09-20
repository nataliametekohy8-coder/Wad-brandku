function Card({ image, title, subtitle }) {
    return (
        <div>
            <div className="border-2 border-slate-400 p-4 h-full flex flex-col bg-white">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-48 object-contain mb-4" 
                />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-600 mt-auto">{subtitle}</p>
            </div>
        </div>
    );
}

export default Card;