import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return(
        <div className = "min-h-screen flex items-center justify-center bg-gray-100">
            <div className = "max-w-md p-8 bg-white shadow-md rounded-md">
                <h1 className = "text-4xl font-bold text-red-500 mb-4">Oops!!</h1>
                <h2 className = "text-2xl text-gray-700 mb-4">Something went wrong!!</h2>
                <h2 className = "text-xl text-gray-600">{err.status + ": " + err.statusText}</h2>
                <img
                className = "mt-8 mx-auto"
                src = "" // Replace with your own error image URL
                alt = "Error Illustration"
                />
                <p className = "mt-8 text-gray-600">
                    We apologize for the inconvenience. Please try again later or contact support.
                </p>
                <a href = "/" className = "text-blue-500 hover:underline mt-4 block text-center">
                    Go back to home page
                </a>
            </div>
        </div>

    );
};

export default Error;