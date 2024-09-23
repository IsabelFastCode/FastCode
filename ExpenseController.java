@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @PostMapping("/add")
    public ResponseEntity<?> addExpense(@RequestBody Expense expense) {
        expenseService.addExpense(expense);
        return ResponseEntity.ok("Expense added successfully");
    }

    @GetMapping("/group/{groupId}")
    public ResponseEntity<List<Expense>> getGroupExpenses(@PathVariable Long groupId) {
        List<Expense> expenses = expenseService.getExpensesByGroupId(groupId);
        return ResponseEntity.ok(expenses);
    }
}
