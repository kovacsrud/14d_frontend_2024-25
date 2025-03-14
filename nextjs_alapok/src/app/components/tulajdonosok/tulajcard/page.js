export default function Tulajcard({ tulaj }) {
    return (
        <div className="m-3 card bg-primary text-primary-content w-96">
            <div className="card-body">
                <h2 className="card-title">{tulaj.first_name} {tulaj.last_name}</h2>
                <p>Income:{tulaj.household_income}</p>
                <p>Birthdate:{tulaj.birthdate}</p>
                <p>Phone:{tulaj.phone_number}</p>
                <p>Email:{tulaj.email}</p>
                <div className="card-actions justify-end">
                    
                </div>
            </div>
        </div>
    );
}