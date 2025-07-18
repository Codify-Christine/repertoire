
import SettingsOverview from "../components/SettingsOverview";
import SettingsSection from "../components/SettingsSection";
import QuickSettings from "../components/QuickSettings";
import AccountActions from "../components/AccountActions";
import HelpAndSupport from "../components/HelpAndSupport";

const Settings = () => {
  return (
    <div className="p-4 md:ml-[250px] min-h-screen bg-[#f9fafc]">
      <h1 className="text-2xl font-bold text-[#1b2c45] mb-6">Settings & Preferences</h1>

      <SettingsOverview />

      <SettingsSection
        icon="user"
        title="Account Settings"
        settings={[
          "Change password",
          "Update email",
          "Two-factor authentication",
        ]}
      />

      <SettingsSection
        icon="chat"
        title="Communication Preferences"
        settings={[
          "SMS notifications",
          "Email alerts",
          "Push notifications",
        ]}
      />

      <SettingsSection
        icon="lock"
        title="Privacy & Security"
        settings={[
          "Profile visibility",
          "Contact preferences",
          "Data sharing",
        ]}
      />

      <SettingsSection
        icon="monitor"
        title="Appearance"
        settings={[
          "Dark/Light mode",
          "Color theme",
          "Font size",
        ]}
      />

      <SettingsSection
        icon="globe"
        title="Language & Region"
        settings={[
          "Language preference",
          "Date format",
          "Time zone",
        ]}
      />

      <QuickSettings />
      <AccountActions />
      <HelpAndSupport />
    </div>
  );
};

export default Settings;

