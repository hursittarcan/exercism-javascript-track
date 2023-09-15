export const translate = (rna) => {
    if (!rna || rna.length === 0) {
        return [];
    }

    let codons = [];
    let proteins = [];

    for (let i = 0; i < rna.length; i += 3) {
        codons.push(rna.substr(i, 3));
    }

    for (let i = 0; i < codons.length; i++) {
        let currentCodon = codons[i];

        if (currentCodon === 'UAA' || currentCodon === 'UAG' || currentCodon === 'UGA') {
            break;
        }

        switch (currentCodon) {
            case 'AUG':
                proteins.push('Methionine');
                break;
            case 'UUU':
            case 'UUC':
                proteins.push('Phenylalanine');
                break;
            case 'UUA':
            case 'UUG':
                proteins.push('Leucine');
                break;
            case 'UCU':
            case 'UCC':
            case 'UCA':
            case 'UCG':
                proteins.push('Serine');
                break;
            case 'UAU':
            case 'UAC':
                proteins.push('Tyrosine');
                break;
            case 'UGU':
            case 'UGC':
                proteins.push('Cysteine');
                break;
            case 'UGG':
                proteins.push('Tryptophan');
                break;
            default:
                throw new Error('Invalid codon');
        }
    }
    return proteins;
}