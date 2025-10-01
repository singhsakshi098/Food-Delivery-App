import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-6">
            <h1 className="text-4xl font-bold text-red-600 mb-2">Oops!!!</h1>
            <h2 className="text-2xl text-gray-800 mb-2">Something Went Wrong!!!!!</h2>
            <h3 className="text-lg text-red-500">
                {err.status}: {err.statusText}
            </h3>
        </div>
    );
};

export default Error;
