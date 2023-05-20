const saveOptions = () => {
    const instanceInvidious = document.getElementById('instanceInvidious').value;
    if (instanceInvidious) {
        chrome.storage.sync.set(
            { instanceInvidious: instanceInvidious },
            () => {
                const status = document.getElementById('status');
                status.textContent = 'Options saved.';
                setTimeout(() => {
                    status.textContent = '';
                }, 3000);
            }
        );
    }
    else {
        const status = document.getElementById('status');
        status.textContent = 'Please enter an instance.';
        setTimeout(() => {
            status.textContent = '';
        }, 3000);
    }
};

const restoreOptions = () => {
    chrome.storage.sync.get(
        { instanceInvidious: 'yewtu.be' },
        (items) => {
            document.getElementById('instanceInvidious').value = items.instanceInvidious;
        }
        
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);