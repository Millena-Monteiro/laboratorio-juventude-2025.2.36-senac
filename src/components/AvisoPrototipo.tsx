interface AvisoPrototipoProps {
    texto: string;
}

const AvisoPrototipo = ({ texto }: AvisoPrototipoProps) => {
    return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md mb-8">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.257 3.51a1.5 1.5 0 012.486 0L15.3 11.25a1.5 1.5 0 01-.622 2.155l-4.5 2.25a1.5 1.5 0 01-1.356 0L5.322 13.405a1.5 1.5 0 01-.622-2.155L8.257 3.51z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="ml-3">
                    <p className="text-sm text-yellow-700 font-semibold">{texto}</p>
                </div>
            </div>
        </div>
    );
};

export default AvisoPrototipo;
