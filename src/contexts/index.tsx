import React, { createContext, useState } from "react";

interface NewCar {
    plate: "",
    manufacture: "",
    model: "",
    rate: "",
    description: "",
    transmission: "",
    type: "",
    year: "",
    options: string[],
    specs: string[]
}

interface CarUpdate {
    plate: "",
    manufacture: "",
    model: "",
    rate: "",
    description: "",
    transmission: "",
    type: "",
    year: "",
    options: string[],
    specs: string[]
}

interface AppContextType {
    getCars: {
        cars: any[],
        setCars: React.Dispatch<React.SetStateAction<any[]>>
    } | null,
    addCar: {
        newCar: NewCar | null
        setNewCar: React.Dispatch<React.SetStateAction<NewCar | null>>
    },
    updateCar: {
        carUpdate: CarUpdate | null
        setCarUpdate: React.Dispatch<React.SetStateAction<CarUpdate | null>>
    },
    carId: {
        carId: string,
        setCarId: React.Dispatch<React.SetStateAction<string>>
    }
}

export const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({children}: {children: JSX.Element}) => {
    const [cars, setCars] = useState(Array<any>);

    const [newCar, setNewCar] = useState<NewCar | null>(null);

    const [carId, setCarId] = useState<string>('')

    const [carUpdate, setCarUpdate] = useState<CarUpdate | null>(null);

    return (
        <AppContext.Provider value={{
            getCars: {
                cars,
                setCars
            },
            addCar: {
                newCar,
                setNewCar
            },
            updateCar: {
                carUpdate,
                setCarUpdate
            },
            carId: {
                carId,
                setCarId
            }
        }}>
            {children}
        </AppContext.Provider>
    )
}