import React from 'react';
import BrandChip from './BrandChip';

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
        <div className={'h-full w-72 pb-4 box-border hidden lg:flex'}>
            <div
                className={
                    'flex flex-col h-full w-72 bg-white shadow-lg rounded-2xl p-8'
                }>
                <p
                    className={
                        'font-light text-[46px] mb-4 leading-none font-exo text-slate-900'
                    }>
                    FILTER
                </p>
                <div className={'flex flex-col'}>
                    <section
                        className={'my-4 py-4 px-2 border-t border-gray-200'}>
                        <p className={'text-2xl font-quicksand text-slate-800'}>
                            PRICE
                        </p>
                        <div className={'flex items-center justify-between'}>
                            <input
                                type={'number'}
                                className={'filterInput'}
                                value={metadata.minPrice || 0}
                                onInput={event =>
                                    setters.setMinPrice(event.target.value)
                                }
                            />
                            <span className={'font-bold'}> - </span>
                            <input
                                type={'number'}
                                className={'filterInput'}
                                value={metadata.maxPrice || 0}
                                onInput={event =>
                                    setters.setMaxPrice(event.target.value)
                                }
                            />
                        </div>
                    </section>
                    <section
                        className={'my-4 py-4 px-2 border-y border-gray-200'}>
                        <p className={'text-2xl font-quicksand text-slate-800'}>
                            BRANDS
                        </p>
                        <ul className={'flex flex-row flex-wrap gap-2 py-2'}>
                            {metadata.allBrands?.map((brand, index) => (
                                <li
                                    key={index}
                                    className={
                                        'flex justify-center items-center relative'
                                    }>
                                    <BrandChip
                                        checked={metadata.selectedBrands.includes(
                                            brand
                                        )}
                                        brand={brand}
                                        handleCheckChange={handleBrandChange}
                                    />
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default FilterProducts;
