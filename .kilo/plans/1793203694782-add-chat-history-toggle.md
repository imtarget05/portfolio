# Plan: Add History Toggle Button to ChatWidget

## Issue
The ChatWidget shows a history panel at the bottom when sessions exist, but there's no button in the header to toggle its visibility. Users need a clear "History" button (like the original version had with a Clock icon).

## Changes Required

### ChatWidget.tsx
1. **Add state**: `const [showHistory, setShowHistory] = useState(false);`

2. **Add Clock icon import**: Add `Clock` to lucide-react imports

3. **Header button**: Add a history toggle button in the header (next to New Chat button):
   ```tsx
   <button
     onClick={() => setShowHistory(!showHistory)}
     className="p-1.5 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors"
     aria-label={lang === 'vi' ? 'Lịch sử' : 'History'}
   >
     <Clock size={18} />
   </button>
   ```

4. **Conditional history panel**: Wrap the history panel (lines 357-395) with `{showHistory && (...)}`

5. **Close on session select**: In `handleSessionClick`, add `setShowHistory(false);`

## Files to Modify
- `src/components/ChatWidget.tsx` - Add toggle state, header button, conditional rendering

## Validation
- Build passes (`npm run build`)
- History button appears in header
- Clicking shows/hides history panel
- Selecting a session closes history panel