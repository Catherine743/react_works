import React, { useState, useEffect } from "react";

const API_KEY = "72a14f664289d301918a2ed81ad7b437";

function Forecast({ city }) {
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!city) {
            setForecast([]);
            setError("");
            return;
        }

        const getForecast = async () => {
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
                );
                const data = await res.json();

                if (data.cod !== "200") {
                    setError("City not found");
                    setForecast([]);
                    return;
                }

                const daily = data.list.filter((item, index) => index % 8 === 0);
                setForecast(daily);
                setError("");
            } catch (err) {
                setError("Something went wrong");
                setForecast([]);
            }
        };

        getForecast();
    }, [city]);

    if (!city) return null;
    if (error) return <p className="text-danger mt-3 text-center">{error}</p>;
    if (!forecast.length) return null;

    return (
        <div className="container mt-4">
            <h4 className="m-5 text-center">Weather Forecast</h4>
            <div className="d-flex justify-content-evenly gap-3 flex-wrap">
                {forecast.map((item, i) => (
                    <div
                        key={i}
                        className="card p-3 text-center shadow"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            minWidth: "150px",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.6)",
                                padding: "20px",
                                borderRadius: "8px",
                            }}
                        >
                            <h6>{item.dt_txt.split(" ")[0]}</h6>
                            <p>{Math.round(item.main.temp)}°C</p>
                            <p>{item.weather[0].description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;
