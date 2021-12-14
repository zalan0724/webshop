import React from 'react';

function FilterProducts({ metadata, setters }) {
    const handleBrandChange = (checked, brand) => {
        if (checked === false) {
            const newSelectedBrands = metadata.selectedBrands.filter(
                item => item !== brand
            );
            setters.setSelectedBrands(newSelectedBrands);
        } else if (checked === true) {
            setters.setSelectedBrands([...metadata.selectedBrands, brand]);
        }
    };

    return (
        <div className={'h-full w-72 pb-4 box-border'}>
            <div
                className={
                    'flex flex-col h-full w-72 bg-white shadow-lg rounded-2xl p-8'
                }>
                <p className={'font-bold text-4xl mb-4'}>FILTER</p>
                <div className={'flex flex-col px-4'}>
                    <div className={'my-4'}>
                        <p className={'text-2xl'}>PRICE</p>
                        <div className={'flex items-center justify-between'}>
                            <input
                                type={'number'}
                                className={'filterInput'}
                                value={metadata?.minPrice}
                                onInput={event =>
                                    setters.setMinPrice(event.target.value)
                                }
                            />
                            <span className={'font-bold'}> - </span>
                            <input
                                type={'number'}
                                className={'filterInput'}
                                value={metadata?.maxPrice}
                                onInput={event =>
                                    setters.setMaxPrice(event.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className={'my-4'}>
                        <p className={'text-2xl'}>BRANDS</p>
                        <ul className={'flex flex-col gap-2 py-2'}>
                            {metadata.allBrands?.map((brand, index) => (
                                <li key={index}>
                                    <input
                                        type={'checkbox'}
                                        checked={metadata.selectedBrands.includes(
                                            brand
                                        )}
                                        onChange={event =>
                                            handleBrandChange(
                                                event.target.checked,
                                                brand
                                            )
                                        }
                                    />
                                    <span>{brand}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterProducts;
