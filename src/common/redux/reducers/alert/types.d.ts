type AlertData = {
  isShown: boolean;
  type: 'error' | 'warning' | 'success';
  label: string;
};

type Alert = {
  alertData: AlertData;
};
