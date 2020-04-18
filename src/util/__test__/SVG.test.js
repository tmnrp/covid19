import { getCovid19SVG } from '../SVG';

test('Check covid logo svg is available', () => {
    expect(getCovid19SVG()).toBeDefined();
});