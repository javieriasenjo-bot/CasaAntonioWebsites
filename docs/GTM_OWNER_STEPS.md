# Casa Antonio — Google Tag Manager steps for the owner

The signed-in Google Tag Manager account has not been changed. Use the existing Casa Antonio container **GTM-T8TLRH4L** and GA4 measurement ID **G-3V83R0Z48F**. Do not create another container or add another Google tag to the website.

## Live status — checked 6 October 2026

The owner has published the settings. Public container version 12 and 36 live-site browser actions across four languages passed the event/GA4-request checks. The controlled collection requests were intercepted. The owner subsequently confirmed that clicking the A long-stay enquiry produces a visible event inside GA4, so the receipt check is now marked done based on that account observation. Other event types and their account-side parameters were not independently inspected by Codex. The steps below remain a reference for importing, testing and publishing future revisions; there is no need to reimport the prepared file for this check.

## Prepared file — ready for import

The owner supplied `C:\dev\GTM-T8TLRH4L_workspace12.json`. It remains unchanged. The updated file is:

`C:\dev\GTM-T8TLRH4L_CasaAntonio_Updated_2026-10-06.json`

Start at **section 2** below. Expected import changes are **3 tags added, 2 tags modified, 3 triggers added, 5 variables added, zero deletions**. Existing Google, contact and guarded listener tags are preserved. The change report is `C:\dev\CasaAntonio_GTM_Change_Report_2026-10-06.json`.

JSON structure, IDs, variable/trigger references and preservation checks passed. A local simulation passed 32 actions across four languages and verified that the existing listener respects the updated source's duplicate-listener guard. This is not Google import/compiler validation or account-level GA4 receipt verification.

On 6 October 2026, the fetched live homepage contained the exact local `analytics-bootstrap.js` code. That confirms the homepage's event producer is deployed; it does not certify all other routes or GTM changes. Preview the relevant live routes below before publication.

## 1. Export your current setup

1. Open [Google Tag Manager](https://tagmanager.google.com/) and sign in.
2. Open the Casa Antonio container. Check that its ID is **GTM-T8TLRH4L**.
3. Click **Admin** in the top navigation.
4. Under **Container**, click **Export Container**.
5. Click **Choose a version or workspace** and select your current workspace, usually **Default Workspace**. This includes pending changes; do not export only an old published version if you have changes you want to retain.
6. Keep all tags, triggers and variables selected, then click **Download**.
7. Save the downloaded JSON file in `C:\dev`. Keep this unchanged file as a backup.
8. Tell Codex the exact filename, for example `C:\dev\GTM-T8TLRH4L_workspace.json`.

Exporting does not change the live site. This export step has already been completed for the prepared file above. Repeat it if the workspace changes before import.

## 2. Import the revised file after Codex prepares it

1. In the same Casa Antonio container, open **Admin → Import Container**.
2. Click **Choose container file** and select the revised file supplied by Codex, not the unchanged backup.
3. Select the existing workspace used for the export.
4. Choose **Merge**. Select **Overwrite conflicting tags, triggers and variables**, so intentional updates replace their existing counterparts rather than creating duplicate tags.
5. Click **Continue**, then **View Detailed Changes**. Compare the displayed changes with the change summary supplied with the revised file. No unrelated item should be deleted.
6. Click **Confirm** when the changes match. Importing places changes in your workspace; publishing is a separate step.

If other people edited that workspace after the export, get a fresh export before preparing/importing the revised file.

## 3. Test the updated website and the container together

The new review, enquiry and map events require the updated website source. The source being committed locally does not prove that `casaantonio.jp` has been deployed. Use the updated deployment or a working preview of the updated build for these checks.

1. In GTM's **Workspace**, click **Preview**.
2. In Tag Assistant, enter the URL of the updated website and click **Connect**. Keep Tag Assistant open.
3. On the website, click one Casa Antonio A booking button. Return to Tag Assistant. Select **airbnb_click** in the event list and check that its GA4 event tag fired once.
4. Repeat for B. Inspect each event's parameters: the apartment should identify the correct A or B property.
5. Click an Airbnb review link and a Booking.com review link. Each should produce **review_click** and fire the review GA4 tag once. Neither should fire the **airbnb_click** tag for that action.
6. Click a long-stay enquiry link. Check **inquiry_click** and one enquiry-tag firing.
7. Click a map link. Check **map_click** and one map-tag firing.
8. Switch to another language. Check one **language_change** event with the selected language. Selecting the already-active language should not create a new language-change event.
9. Open [Google Analytics](https://analytics.google.com/), select Casa Antonio, and open **Admin → Data display → DebugView**. Select your debugging device and verify the events and parameters arrive. If no device appears, check the Preview connection and debug-mode setup before assuming delivery works.

Keep the existing guarded Custom HTML listener while old website pages remain deployed. The updated source suppresses its duplicate listener automatically. Do not add a second listener or URL-based booking trigger. Booking-button clicks measure interest, not completed reservations.

## 4. Publish after the checks pass

1. Return to GTM and click **Submit**.
2. Select **Publish and Create Version**.
3. Use the version name `Casa Antonio - separate review enquiry map intent`.
4. Add the description `Separate reviews and long-stay enquiries from booking clicks; add map tracking and booking context.`
5. Review the listed changes and click **Publish**.
6. Repeat the main booking/review/enquiry/map checks on the live updated website and verify GA4 receipt. Record the published container version and website deployment used for testing.

## What the revised configuration will contain

- Three new event tags and exact Custom Event triggers: **review_click**, **inquiry_click**, **map_click**.
- Additional event context: **provider**, **intent**, **property**, **map_provider**, **page_path**.
- Extra parameters on the existing **airbnb_click** tag, retaining its established event name and trigger.
- **page_language** on the existing language-change tag.
- Existing Google, contact and guarded listener tags retained.

For manual configuration instead of importing a file, [GTM_SETUP.md](GTM_SETUP.md) lists every variable, trigger, tag and parameter mapping. Optional GA4 reporting dimensions are also listed there; they are separate from event transmission.

## Google references

- [Export and import containers](https://support.google.com/tagmanager/answer/6106997?hl=en)
- [Set up, verify and publish GA4 events](https://support.google.com/tagmanager/answer/13034206?hl=en)
- [Custom Event triggers](https://support.google.com/tagmanager/answer/7679219?hl=en)
