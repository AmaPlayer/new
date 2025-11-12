import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Shield, Eye, Bell, Sun, Globe } from 'lucide-react';
import AccountSection from '../components/AccountSection';
import PasswordChangeSection from '../components/PasswordChangeSection';
import SettingsMenuItem from '../../../components/common/settings/SettingsMenuItem';
import ThemeToggle from '../../../components/common/ui/ThemeToggle';
import LanguageSelector from '../../../components/common/forms/LanguageSelector';
import ConfirmationDialog from '../../../components/common/ui/ConfirmationDialog';
import LoadingSpinner from '../../../components/common/ui/LoadingSpinner';
import { useUnsavedChanges } from '../../../hooks/useUnsavedChanges';
import { useConfirmation } from '../../../hooks/useConfirmation';
import '../styles/Settings.css';

interface SettingsPageProps {
  initialTab?: 'account' | 'security' | 'privacy' | 'notifications';
}

interface SettingsState {
  activeTab: string;
  hasUnsavedChanges: boolean;
  isLoading: boolean;
  errors: Record<string, string>;
}

const Settings: React.FC<SettingsPageProps> = ({ initialTab = 'account' }) => {
  const [state, setState] = useState<SettingsState>({
    activeTab: initialTab,
    hasUnsavedChanges: false,
    isLoading: false,
    errors: {}
  });

  const { confirmationState, showConfirmation, hideConfirmation } = useConfirmation();

  // Handle unsaved changes warning
  useUnsavedChanges({
    hasUnsavedChanges: state.hasUnsavedChanges,
    message: 'You have unsaved changes in your settings. Are you sure you want to leave?',
    onNavigateAway: async () => {
      return await showConfirmation({
        title: 'Unsaved Changes',
        message: 'You have unsaved changes that will be lost. Are you sure you want to leave?',
        confirmText: 'Leave',
        cancelText: 'Stay',
        variant: 'warning'
      });
    }
  });

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'preferences', label: 'Preferences', icon: SettingsIcon },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'privacy', label: 'Privacy', icon: Eye },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  const handleTabChange = async (tabId: string) => {
    if (state.hasUnsavedChanges) {
      const confirmed = await showConfirmation({
        title: 'Unsaved Changes',
        message: 'You have unsaved changes in this tab. Are you sure you want to switch tabs?',
        confirmText: 'Switch Tab',
        cancelText: 'Stay',
        variant: 'warning'
      });

      if (!confirmed) {
        hideConfirmation();
        return;
      }
      hideConfirmation();
    }

    setState(prev => ({
      ...prev,
      activeTab: tabId,
      hasUnsavedChanges: false,
      errors: {}
    }));
  };

  const renderTabContent = () => {
    switch (state.activeTab) {
      case 'account':
        return (
          <div className="settings-tab-content">
            <AccountSection />
          </div>
        );
      case 'preferences':
        return (
          <div className="settings-tab-content">
            <div className="preferences-section">
              <h3>App Preferences</h3>
              <p>Customize your app experience with theme and language settings.</p>
              
              <div className="settings-menu-items">
                <SettingsMenuItem
                  icon={Sun}
                  label="Theme"
                  showDivider={true}
                  ariaLabel="Change theme"
                >
                  <ThemeToggle inline={true} showLabel={false} />
                </SettingsMenuItem>

                <SettingsMenuItem
                  icon={Globe}
                  label="Language"
                  showDivider={false}
                  ariaLabel="Change language"
                >
                  <LanguageSelector inline={true} showLabel={true} dropdownPosition="left" />
                </SettingsMenuItem>
              </div>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="settings-tab-content">
            <PasswordChangeSection />
          </div>
        );
      case 'privacy':
        return (
          <div className="settings-tab-content">
            <h3>Privacy Settings</h3>
            <p>Control your privacy and visibility settings.</p>
            {/* Privacy section content will be implemented later */}
          </div>
        );
      case 'notifications':
        return (
          <div className="settings-tab-content">
            <h3>Notification Preferences</h3>
            <p>Manage your notification settings.</p>
            {/* Notifications section content will be implemented later */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <ConfirmationDialog
        isOpen={confirmationState.isOpen}
        title={confirmationState.title}
        message={confirmationState.message}
        confirmText={confirmationState.confirmText}
        cancelText={confirmationState.cancelText}
        variant={confirmationState.variant}
        onConfirm={confirmationState.onConfirm}
        onCancel={confirmationState.onCancel}
        isLoading={confirmationState.isLoading}
      />
      <div className="settings-page">
        <div className="settings-header">
          <div className="settings-title">
            <SettingsIcon size={24} />
            <h1>Settings</h1>
          </div>
        </div>

      <div className="settings-container">
        <nav className="settings-nav">
          <ul className="settings-tabs">
            {tabs.map(tab => {
              const IconComponent = tab.icon;
              return (
                <li key={tab.id}>
                  <button
                    className={`settings-tab ${state.activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => handleTabChange(tab.id)}
                    type="button"
                  >
                    <IconComponent size={18} />
                    <span>{tab.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <main className="settings-content">
          {state.isLoading ? (
            <div className="settings-loading">
              <LoadingSpinner size="large" />
              <p>Loading settings...</p>
            </div>
          ) : (
            renderTabContent()
          )}
        </main>
      </div>
    </div>
    </>
  );
};

export default Settings;