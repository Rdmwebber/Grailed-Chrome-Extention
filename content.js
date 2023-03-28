(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type } = obj;
    if (type === "loadComplete") {
      // selects condition and autofills
      const conditionSelector = document.querySelector(
        ".-condition-container > select"
      );
      if (conditionSelector) {
        conditionSelector.value = "is_new";
      }

      // select and autofill description

      const descriptionText = document.querySelector(
        ".description-container > textarea"
      );
      if (descriptionText) {
        descriptionText.value =
          "100% Authentic\nBrand New With Tags\nNo returns or refunds";
      }

      // Designers Input 

      // Remove Current Input 

      // Map & Append Elements


    }
  });
})();

{/* <div class="Designer-module__designerAutocompleteContainer___0-L82"><div class="RemoveButton-module__RemoveButton___VvbvQ"><svg class="RemoveButton-module__button___j18Yn" height="10px" width="10px" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24696 13.9207C0.776215 14.3752 0.761029 15.1781 1.24696 15.6478C1.71767 16.1174 2.52248 16.1174 2.97805 15.6478L8.91539 9.72423L14.8375 15.6478C15.3083 16.1174 16.1131 16.1174 16.5838 15.6478C17.0546 15.1781 17.0394 14.3752 16.5838 13.9207L10.6465 7.99717L16.5838 2.08881C17.0394 1.61916 17.0546 0.81622 16.5838 0.346571C16.1131 -0.123078 15.3083 -0.107906 14.8375 0.346571L8.91539 6.2701L2.97805 0.346571C2.52248 -0.107906 1.71767 -0.123078 1.24696 0.346571C0.761029 0.81622 0.776215 1.61916 1.24696 2.08881L7.1843 7.99717L1.24696 13.9207Z" fill="black"></path></svg></div><input id="designer-autocomplete" class="NO_GLOBAL_STYLE SellFormInput" type="text" placeholder="Designer" autocomplete="off" value="Streetwear"></div>
 */}

<div class="Designer-module__designerAutocompleteContainer___0-L82"><input id="designer-autocomplete" class="NO_GLOBAL_STYLE SellFormInput" type="text" placeholder="Designer" autocomplete="off" value="Streetwear"></div>