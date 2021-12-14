import React from 'react';

function FilterProducts({ metadata, setters }) {
    return (
        <div className={'h-full w-72 pb-4 box-border'}>
            <div
                className={
                    'flex flex-col h-full w-72 bg-white shadow-lg rounded-2xl p-8'
                }>
                <p className={'font-bold text-4xl mb-8'}>FILTER</p>
                <div className={'flex flex-col px-4'}>
                    <div>
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
                </div>
            </div>
        </div>
    );
}

export default FilterProducts;
