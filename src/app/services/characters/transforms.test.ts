import { SwapiCharacter, SwapiFilm, SwapiSpecies, SwapiStarship } from "@/app/api/swapiClient/types";
import {describe, expect, it} from "@jest/globals"
import {
  transformToCharacter,
  transformToFilm,
  transformToSpecies,
  transformToStarship
} from "@/app/services/characters/transforms"

describe('Transform functions', () => {
  const mockUrl = 'https://swapi.dev/api/people/1/';

  it('should transform SwapiCharacter to Character', () => {
    const swapiCharacter: SwapiCharacter = { url: mockUrl, name: 'Luke Skywalker' } as SwapiCharacter
    const result = transformToCharacter(swapiCharacter);
    expect(result).toEqual({ id: '1', name: 'Luke Skywalker' });
  });

  it('should transform SwapiFilm to Film', () => {
    const swapiFilm: SwapiFilm = { url: mockUrl, title: 'A New Hope' };
    const result = transformToFilm(swapiFilm);
    expect(result).toEqual({ id: '1', title: 'A New Hope' });
  });

  it('should transform SwapiStarship to Starship', () => {
    const swapiStarship: SwapiStarship = { url: mockUrl, name: 'Millennium Falcon' };
    const result = transformToStarship(swapiStarship);
    expect(result).toEqual({ id: '1', name: 'Millennium Falcon' });
  });

  it('should transform SwapiSpecies to Species', () => {
    const swapiSpecies: SwapiSpecies = { url: mockUrl, name: 'Human' } as SwapiSpecies
    const result = transformToSpecies(swapiSpecies);
    expect(result).toEqual({ id: '1', name: 'Human' });
  });

  it('should throw error when url does not contain id', () => {
    const swapiCharacter: SwapiCharacter = { url: 'https://swapi.dev/api/people/', name: 'Luke Skywalker' } as SwapiCharacter
    expect(() => transformToCharacter(swapiCharacter)).toThrowError('Failed to parse id from url https://swapi.dev/api/people/');
  });
});
