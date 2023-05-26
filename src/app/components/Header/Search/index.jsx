import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { MdOutlineHistory } from 'react-icons/md';
import { Select } from '../Select';
import { typesToSpanish } from '../../../../helpers/typesToSpanish';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { SearchLogic } from './logic/SearchLogic';
import { SearchOptions } from '../../../../helpers/SearchOptions';

const Search = () => {
  const {
    queryValue,
    titleOption,
    searchHistory,
    isActiveInput,
    inputRef,
    toggleShowResults,
    results,
    showResults,
    isLoading,
    changeTitleOption,
    setQueryValue,
    search,
    handleFocus,
    handleBlur,
    deleteHistory,
    handleClick,
  } = SearchLogic();
  return (
    <article className='w-full h-[40px] basis-[10%] lg:basis-full'>
      <div className='fixed lg:static lg:top-0 w-[94%] lg:w-full top-[55px] left-[1%] flex max-w-[600px]'>
        {/* container input */}
        <div className='bg-blue-500 relative h-[40px] basis-full' onBlur={handleBlur}>
          <input
            type='text'
            onChange={(event) => setQueryValue(event.target.value)}
            value={queryValue}
            onFocus={handleFocus}
            ref={inputRef}
            placeholder='Buscar Lugar'
            className='w-full h-full placeholder:text-neutral-500 pl-4 outline-neutral-300 text-neutral-700 border-[1px] border-neutral-300'
          />

          {showResults && (
            <article
              className={
                results.length > 0
                  ? 'bg-white h-[300px] overflow-y-scroll scrollbar__search absolute w-[100%] transition duration-150 ease-in-out'
                  : 'bg-white h-[120px]  scrollbar__search absolute w-[100%] transition duration-150 ease-in-out'
              }
            >
              <div className='px-4 flex justify-between pt-6'>
                <h5 className='text-neutral-700'>
                  Resultados de {queryValue}(<span className='font-bold'>{results.length}</span>)
                </h5>
                <AiOutlineCloseCircle
                  className='text-3xl text-primary-700 cursor-pointer'
                  onClick={() => {
                    toggleShowResults();
                    setQueryValue('');
                  }}
                />
              </div>
              {isLoading && (
                <div className='flex items-center px-4 pt-3 gap-x-2 text-neutral-900  text-pt flex-row'>
                  <GiEarthAfricaEurope className='animate-spin text-3xl text-primary-700' />{' '}
                  Buscando...
                </div>
              )}
              {!isLoading && results.length === 0 && (
                <div className='px-4 pt-3 text-neutral-500'>No hay resultados</div>
              )}
              {results.length > 0 &&
                results.map((result, index) => (
                  <div
                    onClick={() => handleClick(result)}
                    className='bg-white border-b-[1px] border-neutral-100 py-5 px-4 relative flex justify-between cursor-pointer'
                    key={result.name + index}
                  >
                    <div className='basis-[14%] flex items-start pt-2 lg:basis-[8%]'>
                      <img
                        className='max-w-[40px]'
                        src={
                          result.wheelchair_accessible_entrance
                            ? '/public/assets/icons/wheel-accesible.svg'
                            : '/public/assets/icons/wheel-no.svg'
                        }
                      />
                    </div>
                    <div className='basis-[80%] lg:basis-[88%]'>
                      <div className=''>
                        <h5 className='text-neutral-900 font-bold p-0 m-0'>{result.name} </h5>
                        <span>
                          {result.business_status === 'OPERATIONAL' &&
                          result.opening_hours.open_now ? (
                            <span className='text-alert-success'>Abierto Ahora</span>
                          ) : (
                            <span className='text-alert-error'>Cerrado ahora</span> || (
                              <span>${result.business_status}</span>
                            )
                          )}
                        </span>
                      </div>
                      <p className='text-neutral-500 py-2 text-pm lg:text-[16px]'>
                        {result.formatted_address}
                      </p>
                      <div>
                        <div className='flex gap-x-1 flex-wrap gap-y-1'>
                          {(result.types.length > 0 &&
                            result.types.map((type, index) => {
                              const newWord = type.replace(type, typesToSpanish[type]);
                              return (
                                <div
                                  className='capitalize px-2 bg-neutral-100 text-neutral-900'
                                  key={newWord + index}
                                >
                                  {newWord}
                                </div>
                              );
                            })) || (
                            <div className='capitalize px-2 bg-neutral-100 text-neutral-900'>
                              Esblecimiento
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </article>
          )}

          {isActiveInput && searchHistory.length > 0 && (
            <div className='bg-white absolute w-[100%] border-[1px] border-neutral-100 rounded-[10px]'>
              {searchHistory.map((history, index) => (
                <button
                  onClick={() => {
                    setQueryValue(history.query);
                    inputRef.current.focus();
                  }}
                  key={history + index}
                  data-focus
                  className='flex justify-between px-4 w-full hover:bg-neutral-100 py-2'
                >
                  <span className='flex gap-x-2 items-center'>
                    <MdOutlineHistory className='text-neutral-700' />{' '}
                    <span className='text-neutral-500 cursor-default'>{history.query}</span>
                  </span>
                  <a onClick={() => deleteHistory(index)} className='text-pm text-primary-700'>
                    Eliminar
                  </a>
                </button>
              ))}
            </div>
          )}

          <div className='absolute right-2 top-0 h-full'>
            <Select
              options={SearchOptions}
              titleOption={titleOption}
              changeTitleOption={changeTitleOption}
            />
          </div>
        </div>
        {/* end container input */}
        <div
          onClick={search}
          className={
            queryValue.length > 0
              ? 'bg-primary-900 basis-[50px] h-[40px] w-[50px] text-white text-3xl flex items-center justify-center hover:bg-primary-700 cursor-pointer'
              : 'bg-primary-900 basis-[50px] h-[40px] w-[50px] text-white text-3xl flex items-center justify-center hover:bg-primary-700 cursor-not-allowed'
          }
        >
          <AiOutlineSearch />
        </div>
      </div>
    </article>
  );
};

export default Search;
