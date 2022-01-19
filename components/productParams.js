const formatGraphicscardData = product => {
    return {
        Name: product.brand + ' ' + product.name,
        Memory: product.memory + ' GB',
        'Core Clock': product.base + ' MHz',
        'Boost Clock': product.max + ' MHz',
        'HDMI Ports': product.hdmi || 0,
        'Display Ports': product.display || 0,
        'Mini Display Ports': product.minidisplay || 0,
        TDP: product.tdp + ' W',
        Price: '$ ' + product.price,
        Link: product.link,
    };
};

const formatMotherboardData = product => {
    return {
        Name: product.brand + ' ' + product.name,
        Form: product.form,
        Socket: product.socket,
        Price: '$ ' + product.price,
        Link: product.link,
    };
};

const formatMemoryData = product => {
    return {
        Name: product.brand + ' ' + product.name,
        Modules: product.modules,
        'Core Clock': product.base + ' MHz',
        Type: product.type,
        Price: '$ ' + product.price,
        Link: product.link,
    };
};

const formatProcessorData = product => {
    return {
        Name: product.brand + ' ' + product.name,
        Core: product.core,
        Threats: product.threat,
        'Core Clock': product.base + ' GHz',
        'Boost Clock': product.max + ' GHz',
        Socket: product.socket,
        Size: product.size + ' nm',
        Price: '$ ' + product.price,
        Link: product.link,
    };
};

const formatCaseData = product => {
    const formatMotherboards = array => {
        let string = '';
        array.forEach(type => {
            string += type + ', ';
        });
        return string.slice(0, -2);
    };

    return {
        Name: product.brand + ' ' + product.name,
        Type: product.type,
        Motherboards: formatMotherboards(product.motherboards),
        'Expansion Slots:': product.expSlots,
        'Internal 2.5" Bays': product.bays25,
        'Internal 3.5" Bays': product.bays35,
        Price: '$ ' + product.price,
        Link: product.link,
    };
};

const getProductParams = (productType, product) => {
    switch (productType) {
        case 'graphicscards':
            return formatGraphicscardData(product);
        case 'motherboards':
            return formatMotherboardData(product);
        case 'memories':
            return formatMemoryData(product);
        case 'processors':
            return formatProcessorData(product);
        case 'cases':
            return formatCaseData(product);
        default:
            return { Error: 'Not available' };
    }
};

export default getProductParams;
