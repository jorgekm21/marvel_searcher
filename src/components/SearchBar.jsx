import { Fragment } from "react"
import { useForm } from 'react-hook-form'

const SearchBar = () => {
    const {register, formState: { errors } } = useForm()

    return (
        <Fragment>
            <form action='/' method="get" className="form_search">
                <input
                    name="search_bar"
                    placeholder="Nombre de Heroe"
                    className="search_bar"
                    {
                        ...register(
                            'search_bar',
                            {
                                required: true,
                                minLength: 4
                            }
                        )
                    }
                    ></input>
                    {   errors.search_bar &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors.search_bar && 'Campo Requerido'}
                    </span>
                }

                <button className="btn_search" type="submit">Buscar</button>
            </form>
        </Fragment>
    )
}

export default SearchBar