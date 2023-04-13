import React, { useEffect, useState, useRef } from "react";

const data = {
    Germany: "Berlin",
    Azerbaijan: "Baku"
  };

function CountryCapitalGame() {
    // Use console.log() for debugging
    

    const valuesRef = useRef(Object.entries(data));
    const [entries, setEntries] = useState({});

    const [state, setState] = useState({
        country: "",
        capital: "",
        duplicateCountry: "",
        duplicateCapital: "",
        wrongValue: false,
        filteredData: [],
    })

    const updateState = (values) => {
        setState((prev) => ({
            ...prev,
            ...values
        }))
    }

    useEffect(() => {
        handleRandomData(data);
    }, []);

    const handleRandomData = (values) => {
        const randomObjKeys = Object.keys(values).sort(() => Math.random() - 0.5);
        const randomObjValues = Object.keys(values).sort(() => Math.random() - 0.5);
        const newArr = randomObjKeys.map((ele, index) => ({[ele] : randomObjValues[index]}));
        const newEntries = Object.assign({}, ...newArr);

        console.log("newEntries", newEntries)
        setEntries(Object.entries(newEntries));
    }

    const getFilteredData = (val1, val2) => {
    let filter = [];
    if (val1) {
      filter = valuesRef.current.filter(
        ([key, _]) => key.toLowerCase() === val1.toLowerCase()
      );
    } else {
      filter = valuesRef.current.filter(
        ([_, val]) => val.toLowerCase() === val2.toLowerCase()
      );
    }
    const find = filter.find(d => d);
    updateState({ filteredData: find });
  };

  const add = (val1, val2) => {
    if (!state.country && val1) {
      updateState({ country: val1 });
      getFilteredData(val1, null);
    } else if (!state.capital && val2) {
      updateState({ capital: val2 });
      getFilteredData(null, val2);
    } else if (state.country && val1 && !state.duplicateCountry) {
      updateState({ duplicateCountry: val1 });
    } else if (state.capital && val2 && !state.duplicateCapital) {
      updateState({ duplicateCapital: val2 });
    }
    if (state.wrongValue) {
      updateState({
        country: "",
        capital: "",
        duplicateCapital: "",
        duplicateCountry: "",
      });
    }
    updateState({ wrongValue: false });
    check(val1, val2);
  };

  const check = (val1, val2) => {
    const selectedCountry = state.country ? state.country : val1;
    const selectedCapital = state.capital ? state.capital : val2;
    if (
      !state.wrongValue &&
      state.filteredData[0]?.toLowerCase() ===
        selectedCountry?.toLowerCase() &&
      state.filteredData[1]?.toLowerCase() === selectedCapital?.toLowerCase()
    ) {
      const removeSelected = valuesRef.current.filter(
        ([key, _]) => key.toLowerCase() !== selectedCountry.toLowerCase()
      );
      updateState({ country: "", capital: "" });
      valuesRef.current = removeSelected;
      handleRandomData(Object.fromEntries(removeSelected));
    } else if (state.wrongValue && val1) {
      updateState({ country: val1 });
    } else if (state.wrongValue && val2) {
      updateState({ capital: val2 });
    } else if (state.country || state.capital) {
      updateState({ wrongValue: true });
    } else {
      return null;
    }
  };

    return(
        <div>
      {entries.length ? (
        entries.map(([key, val]) => (
          <div>
            <button
              style={
                state.country.toLowerCase() === key.toLowerCase() &&
                !state.wrongValue
                  ? { backgroundColor: "#0000ff" }
                  : (state.country.toLowerCase() === key.toLowerCase() ||
                      state.duplicateCountry.toLowerCase() ===
                        key.toLowerCase()) &&
                    state.wrongValue
                  ? { backgroundColor: "#FF0000" }
                  : {}
              }
              onClick={() => add(key, null)}
            >
              {key}
            </button>
            <button
              style={
                state.capital === val && !state.wrongValue
                  ? { backgroundColor: "#0000ff" }
                  : (state.capital.toLowerCase() === val.toLowerCase() ||
                      state.duplicateCapital.toLowerCase() ===
                        val.toLowerCase()) &&
                    state.wrongValue
                  ? { backgroundColor: "#FF0000" }
                  : {}
              }
              onClick={() => add(null, val)}
            >
              {val}
            </button>
          </div>
        ))
      ) : (
        <p>Congratulations</p>
      )}
    </div>
    )
}

export default CountryCapitalGame;
