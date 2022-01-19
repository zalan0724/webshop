import React from 'react';
import BrandChip from './BrandChip';

function ProductsFilter({ metadata, setters }) {
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
        <div className={'w-full lg:w-64 pb-4 box-border flex'}>
            <div className={'flex flex-col w-full lg:w-64 rounded-2xl'}>
                <p
                    className={
                        'font-light text-[46px] mb-4 leading-none text-slate-900'
                    }>
                    FILTER
                </p>
                <div className={'flex flex-col'}>
                    <section
                        className={'my-4 py-4 px-2 border-t border-stone-300'}>
                        <p className={'text-2xl font-light text-slate-800'}>
                            PRICE
                        </p>
                        <div className={'flex items-center justify-between'}>
                            <div
                                className={
                                    'relative w-2/5 border-black border-b-2'
                                }>
                                <span className={'absolute'}>$</span>
                                <input
                                    type={'number'}
                                    className={'filterInput'}
                                    value={metadata.minPrice || 0}
                                    onInput={event =>
                                        setters.setMinPrice(event.target.value)
                                    }
                                />
                            </div>
                            <span className={'font-bold'}> - </span>
                            <div
                                className={
                                    'relative w-2/5 border-black border-b-2'
                                }>
                                <span className={'absolute'}>$</span>
                                <input
                                    type={'number'}
                                    className={'filterInput'}
                                    value={metadata.maxPrice || 0}
                                    onInput={event =>
                                        setters.setMaxPrice(event.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </section>
                    <section
                        className={'my-4 py-4 px-2 border-y border-stone-300'}>
                        <p className={'text-2xl font-light text-slate-800'}>
                            BRANDS
                        </p>
                        <ul className={'flex flex-row flex-wrap gap-2 py-2'}>
                            {metadata.allBrands?.map((brand, index) => (
                                <li
                                    key={index}
                                    className={
                                        'flex justify-center items-center relative'
                                    }
                                    title={brand}>
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

export default ProductsFilter;
