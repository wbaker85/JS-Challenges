const CODON_TRANSLATIONS = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
};

function translate(strRNA = '') {
  let proteinArr = (strRNA.match(/.{3}/g) || [])
                      .map((codon) => CODON_TRANSLATIONS[codon]);

  if (proteinArr.some((protein) => !protein)) throw new Error('Invalid codon');

  let stopIdx = proteinArr.indexOf('STOP');

  return stopIdx === -1 ? proteinArr : proteinArr.slice(0, stopIdx);
}

module.exports = translate;
