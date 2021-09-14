import React, { Component } from 'react';

import Header from "./components/Header/Header";
import css from './app.module.css';
import Paises from "./components/Paises/Paises";

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            allCountries: [],
            filter: '',
            filtedCountries: [],
            population: 0,
            number: 0,
        }
    }

    async componentDidMount() {
        const data = await fetch('https://restcountries.eu/rest/v2/all');
        let json = await data.json();
        json = json.map(({ name, translations, population, numericCode, flag }) => {
            return {
                id: numericCode,
                name,
                pt: translations.pt,
                population,
                flag,
            }
        });
        const number = json.length;
        const population = json.reduce((a, b) => {
            return a + b.population
        }, 0);
        this.setState({
            allCountries: json,
            filtedCountries: json,
            number,
            population,
        })
    }

    handleInputChange = (string) => {
        this.setState({
            filter: string,
        });
        const filterLowerCase = string.toLowerCase();
        const filtedCountries = this.state.allCountries.filter(pais => {
            return pais.pt.toLowerCase().includes(filterLowerCase)
        });
        const number = filtedCountries.length;
        const population = filtedCountries.reduce((a, b) => {
            return a + b.population
        }, 0);
        console.log(population)
        this.setState({
            filtedCountries,
            number,
            population,
        })
    }

    render() {
        const { filter, filtedCountries, number, population } = this.state;
        return (
            <div className={css.mainContainer}>
                <div className={css.flexRow}>
                <Header
                    filter={filter}
                    onChange={this.handleInputChange}
                    number={number}
                    population={population}
                />
                </div>
                <div>
                    <Paises paises={filtedCountries} />
                </div>
            </div>
        );
    }
}