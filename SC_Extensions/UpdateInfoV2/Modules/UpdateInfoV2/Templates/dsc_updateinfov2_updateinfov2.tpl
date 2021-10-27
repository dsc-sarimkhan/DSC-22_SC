<section class="profile-updateadditionalinformation">
  <h2 class="profile-updateadditionalinformation-title">Update Additional Information</h2>
  <form class="profile-updateadditionalinformation-form">
    <fieldset>
      <legend class="profile-updateadditionalinformation-subtitle">
        Product
      </legend>
      <div class="profile-updateadditionalinformation-controls-group">
        <div class="profile-updateadditionalinformation-controls">
          <label class="profile-updateadditionalinformation-label">
            <input type="checkbox" id="hideprices" name="hideprices" data-type="hideprices-checkbox" value="F">
            Hide Products Prices on Web Store
          </label>
        </div>
      </div>
    </fieldset>
    <div class="profile-updateadditionalinformation-controls-submit">
      <button data-action="updateadditionalinfo"
        class="profile-updateadditionalinformation-submit">Update</button>
      <button type="reset" class="profile-updateadditionalinformation-reset"
        data-action="reset">Cancel</button>
    </div>
  </form>
  <br>
</section>


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->